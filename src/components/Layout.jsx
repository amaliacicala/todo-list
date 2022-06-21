import React from 'react'

export function Layout({children}) {
    return (
        <main>
            <section className="container">
            {children}
            </section>
        </main>
    )
}