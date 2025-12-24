import { useNavigate } from 'react-router-dom'
import { ChevronRight, ArrowLeft, Lightbulb, Pizza, Briefcase, Dumbbell, Music } from 'lucide-react'

const categories = [
    { id: 'idea', name: 'Idea', count: '12 Tasks', icon: Lightbulb, color: '#9747FF', bg: '#F3E8FF' }, // Purple
    { id: 'food', name: 'Food', count: '9 Tasks', icon: Pizza, color: '#D97706', bg: '#FEF3C7' },     // Orange
    { id: 'work', name: 'Work', count: '14 Tasks', icon: Briefcase, color: '#DB2777', bg: '#FCE7F3' }, // Pink
    { id: 'sport', name: 'Sport', count: '5 Tasks', icon: Dumbbell, color: '#2563EB', bg: '#DBEAFE' },  // Blue
    { id: 'music', name: 'Music', count: '4 Tasks', icon: Music, color: '#9747FF', bg: '#F3E8FF' },    // Purple
]

export default function ChooseActivity() {
    const navigate = useNavigate()

    return (
        <div className="page-activity">
            <header className="activity-header">
                <div className="header-top">
                    <button className="icon-btn" style={{ padding: 0 }} onClick={() => navigate('/')}>
                        <GridIcon />
                    </button>
                    <h2 className="title-text">Create Task</h2>
                    <button className="icon-btn" style={{ padding: 0 }}>
                        <ClockIcon />
                    </button>
                </div>

                <div className="calendar-week-mock">
                    {/* Visual mock of the week strip from design */}
                    <div className="week-item active">
                        <span>14</span>
                        <span>Mon</span>
                    </div>
                    <div className="week-item">
                        <span>15</span>
                        <span>Tue</span>
                    </div>
                    <div className="week-item">
                        <span>16</span>
                        <span>Wed</span>
                    </div>
                    <div className="week-item">
                        <span>17</span>
                        <span>Thu</span>
                    </div>
                </div>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Choose Activity</h3>
            </header >

            <main className="activity-list">
                {categories.map((cat) => {
                    const Icon = cat.icon
                    return (
                        <div
                            key={cat.id}
                            className="category-card"
                            onClick={() => navigate('/create', { state: { category: cat.id } })}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="cat-icon-box" style={{ color: cat.color, backgroundColor: cat.bg }}>
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{cat.name}</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{cat.count}</div>
                                </div>
                            </div>
                            <ChevronRight size={20} color="#9CA3AF" />
                        </div>
                    )
                })}


                <button
                    className="fab-btn"
                    onClick={() => navigate('/create')}
                >
                    <PlusIcon />
                </button>
            </main>
        </div >
    )
}

/* Helpers for icons not imported (Grid/Clock already used in home, can reuse or make generic) */
/* Actually I didn't import them. I'll just use inline SVGs or import them. */
/* Wait, I imported ChevronRight etc. I missed importing Grid/Clock/PlusIcon here. Fixing imports below. */

function GridIcon() {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
}

function ClockIcon() {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
}

function PlusIcon() {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
}
