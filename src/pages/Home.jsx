import { useNavigate } from 'react-router-dom'
import { Plus, Grid, Clock } from 'lucide-react'

// Sub-component for Date Strip (visual only for now)
function DateStrip() {
    const dates = [
        { day: '14', mon: 'Mon', active: true },
        { day: '15', mon: 'Tue', active: false },
        { day: '16', mon: 'Wed', active: false },
        { day: '17', mon: 'Thu', active: false },
    ]

    return (
        <div className="date-strip-container">
            {dates.map((d, i) => (
                <div key={i} className={`date-card ${d.active ? 'active' : ''}`}>
                    <span className="date-number">{d.day}</span>
                    <span className="date-mon">{d.mon}</span>
                </div>
            ))}
        </div>
    )
}

function TaskItem({ todo, onToggle }) {
    // Styles inline for speed, can move to CSS later
    const containerStyle = {
        backgroundColor: '#fff',
        borderRadius: '16px',
        padding: '16px',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
    }

    return (
        <div style={containerStyle}>
            <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF', marginBottom: '4px' }}>{todo.time}</div>
                <div style={{ fontWeight: 600, fontSize: '1rem', color: '#1F2937' }}>{todo.title}</div>
                <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>{todo.subtitle}</div>
            </div>
            <div
                onClick={() => onToggle(todo.id)}
                style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '6px',
                    border: `2px solid ${todo.completed ? 'var(--primary)' : '#E5E7EB'}`,
                    backgroundColor: todo.completed ? 'var(--primary)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    marginLeft: '12px'
                }}
            >
                {todo.completed && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                )}
            </div>
        </div>
    )
}

export default function Home({ todos, onToggle }) {
    const navigate = useNavigate()

    return (
        <div className="page-home">
            {/* Purple Header */}
            <header className="home-header">
                <div className="top-bar">
                    <Grid size={24} color="white" />
                    <span className="header-date">14 Sept</span>
                    <Clock size={24} color="white" />
                </div>

                <div className="hero-section">
                    <div>
                        <h1 style={{ color: 'white', fontSize: '2rem' }}>Today</h1>
                        <p style={{ color: 'rgba(255,255,255,0.8)' }}>6 Tasks</p>
                    </div>
                    <button className="add-btn-small" onClick={() => navigate('/categories')}>
                        Add New
                    </button>
                </div>

                <DateStrip />
            </header>

            {/* Scrollable List Area */}
            <main className="home-content">
                <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>My Tasks</h2>

                <div className="tasks-list">
                    {todos.map(todo => (
                        <TaskItem key={todo.id} todo={todo} onToggle={onToggle} />
                    ))}
                </div>
            </main>
        </div>
    )
}
