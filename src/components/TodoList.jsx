// function CheckIcon({ checked }) {
// I will use SVGs directly to avoid dependency issues for now, or install lucide-react. 
// Standard practice usually involves an icon library, but to keep it minimal and dependency-free for now unless installed:
// "npm install lucide-react" would be good but I can just use a simple SVG.

function CheckIcon({ checked }) {
    return (
        <div style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: `2px solid ${checked ? 'var(--text-color)' : '#e5e5e5'}`,
            backgroundColor: checked ? 'var(--text-color)' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem',
            transition: 'all 0.2s ease'
        }}>
            {checked && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--bg-color)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            )}
        </div>
    )
}

export function TodoList({ todos, onToggle, onDelete }) {
    if (todos.length === 0) {
        return (
            <div style={{ textAlign: 'center', color: 'var(--secondary-text)', marginTop: '2rem' }}>
                No tasks for today.
            </div>
        )
    }

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map(todo => (
                <li key={todo.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 0',
                    borderBottom: '1px solid transparent',
                    // borderBottom: '1px solid #f5f5f5' // optional
                }}>
                    <div
                        onClick={() => onToggle(todo.id)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            flex: 1,
                            opacity: todo.completed ? 0.5 : 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            transition: 'opacity 0.2s'
                        }}
                    >
                        <CheckIcon checked={todo.completed} />
                        <span style={{ fontSize: '1rem' }}>{todo.text}</span>
                    </div>
                    <button
                        onClick={() => onDelete(todo.id)}
                        style={{
                            padding: '0.5rem',
                            opacity: 0.3,
                            cursor: 'pointer',
                            transition: 'opacity 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                        onMouseOut={(e) => e.currentTarget.style.opacity = 0.3}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </li>
            ))}
        </ul>
    )
}
