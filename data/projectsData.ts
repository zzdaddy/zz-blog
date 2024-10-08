interface Project {
    title: string,
    description: string,
    href?: string,
    imgSrc?: string,
}

const projectsData: Project[] = [
    {
        title: '个人项目1',
        description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
        imgSrc: '/static/images/google.png',
        href: 'https://www.google.com',
    },
    {
        title: '个人项目2',
        description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
        imgSrc: '/static/images/time-machine.jpg',
        href: '/blog/the-time-machine',
    },
]

export default projectsData
