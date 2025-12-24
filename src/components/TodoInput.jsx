import { useState } from 'react'

export function TodoInput({ onAdd }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        onAdd(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
                style={{
                    width: '100%',
                    padding: '1rem 0',
                    fontSize: '1.2rem',
                    borderBottom: '1px solid var(--border-color)',
                    color: 'var(--text-color)',
                    background: 'transparent'
                }}
            />
        </form>
    )
}
