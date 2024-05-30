import React from 'react'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    let album = await res.json();
    return {
        props: {
            a: album
        }
    }
}

const Albu = ({ a }: any) => {
    return (
        <div>
            {
                a.map((v: any) => {
                    return (<div>{v.title}</div>)
                })
            }
        </div>
    )
}

export default Albu
