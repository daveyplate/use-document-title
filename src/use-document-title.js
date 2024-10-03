import { useEffect, useState } from 'react'

/**
 * Get the current document title and update it when it changes
 * @returns {string} The current document title
 */
export function useDocumentTitle() {
    const [title, setTitle] = useState(null)

    useEffect(() => {
        // Observe the title element for changes
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === "childList") {
                    setTitle(document.title)
                }
            })
        })

        const target = document.querySelector('title')
        if (target) {
            observer.observe(target, { childList: true })
        }

        setTitle(document.title)

        // Cleanup observer on component unmount
        return () => observer.disconnect()
    }, [])

    return title
}