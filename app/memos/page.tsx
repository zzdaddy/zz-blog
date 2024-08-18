'use client'
import { useEffect, useState } from 'react'
import projectsData from '@/data/projectsData'
import MemoCard from '@/components/MemoCard'
import { genPageMetadata } from 'app/seo'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import markdownit from 'markdown-it'
import markdownitmark from 'markdown-it-mark'
import markdownitcontainer from 'markdown-it-container'
import NoContent from 'app/no-content'
// export const metadata = genPageMetadata({ title: 'Memos' })

export default function Memos() {

    let [memos, setMemos] = useState<any[]>([])
    
    const filterValue = "creator=='users/1'&&tag_search==['Blog']&&visibilities==['PUBLIC', 'PROTECTED']&&limit==30";
    const encodedFilterValue = encodeURIComponent(filterValue);
    const url = `https://memoz.zzstudio.cn/api/v1/memos?filter=${encodedFilterValue}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_MEMOS_TOKEN}`
            }
        }).then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
        .then(jsonData => {
            if (jsonData.memos && jsonData.memos.length) {
                jsonData.memos.forEach((m: any) => {
                    m.content = m.content.replaceAll('#Blog', '')
                    m.content = markdownit().use(markdownitmark).use(markdownitcontainer, 'warning').render(m.content)
                    m.htmlContent = () => <div key={m.uid} dangerouslySetInnerHTML={{ __html: m.content}}></div>
                    console.log(`m.content`, m.content)
                })
            }
            setMemos(jsonData.memos || [])
          })
        
    }, [])
    

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Memos
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            共有{ memos.length }条memos
          </p>
        </div>
        <div className="container py-6">
            { !memos.length && NoContent() }
          { memos.length && <div className="grid grid-cols-1 grid-flow-row-dense gap-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {memos.map((m) => (
            //   <MDXLayoutRenderer code={m} components={components}></MDXLayoutRenderer>
                <MemoCard key={m.uid} author={'zzstudio'} time={m.createTime} description={m.htmlContent()}>
                    
                </MemoCard>
            ))}
          </div>}
        </div>
      </div>
    </>
  )
}
