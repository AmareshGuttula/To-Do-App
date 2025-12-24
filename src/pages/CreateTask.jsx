import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft, Lightbulb, Pizza, Briefcase, Dumbbell, Music, ChevronDown } from 'lucide-react'

// Reuse category mapping or import it
const categoriesMap = {
    idea: { name: 'Idea', icon: Lightbulb, color: '#9747FF', bg: '#F3E8FF' },
    food: { name: 'Food', icon: Pizza, color: '#D97706', bg: '#FEF3C7' },
    work: { name: 'Work', icon: Briefcase, color: '#DB2777', bg: '#FCE7F3' },
    sport: { name: 'Sport', icon: Dumbbell, color: '#2563EB', bg: '#DBEAFE' },
    music: { name: 'Music', icon: Music, color: '#9747FF', bg: '#F3E8FF' },
}

export default function CreateTask({ onAddTask }) {
    const navigate = useNavigate()
    const location = useLocation()
    const preSelectedCat = location.state?.category || 'idea'

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [catId, setCatId] = useState(preSelectedCat)
    const [selectedDate, setSelectedDate] = useState('30') // Mock selected date

    const handleCreate = () => {
        if (!title) return

        // Mock time logic
        const newTask = {
            id: Date.now(),
            title,
            subtitle: desc || 'No description',
            time: '10:00 - 11:00', // Mock time
            completed: false,
            category: categoriesMap[catId].name,
            date: new Date().toISOString()
        }

        onAddTask(newTask)
        navigate('/')
    }

    const CurrentIcon = categoriesMap[catId].icon

    return (
        <div className="page-create">
            <header style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button className="icon-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={24} />
                </button>
                <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Create Task</span>
                <div style={{ width: 24 }}></div> {/* Spacer */}
            </header>

            {/* Calendar Month View Mock */}
            <div className="calendar-widget">
                <div className="cal-header">
                    <span>October</span>
                </div>
                <div className="cal-grid">
                    <span className="cal-day-label">Mo</span>
                    <span className="cal-day-label">Tu</span>
                    <span className="cal-day-label">We</span>
                    <span className="cal-day-label">Th</span>
                    <span className="cal-day-label">Fr</span>
                    <span className="cal-day-label">Sa</span>
                    <span className="cal-day-label">Su</span>

                    {/* Some mock dates */}
                    <span className="cal-day faded">29</span>
                    <span className={`cal-day ${selectedDate === '30' ? 'active' : ''}`} onClick={() => setSelectedDate('30')}>30</span>
                    <span className="cal-day">1</span>
                    <span className="cal-day">2</span>
                    <span className="cal-day">3</span>
                    <span className="cal-day">4</span>
                    <span className="cal-day">5</span>
                    {/* ... simplified row */}
                </div>
            </div>

            {/* Category Selector */}
            <div className="form-section">
                <h4 className="section-title">Schedule</h4>
                <div className="input-group">
                    <label>Name</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="input-group">
                    <label>Task Description...</label>
                    <textarea
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        rows={3}
                        className="form-input"
                    />
                </div>
            </div>

            {/* Category Dropdown Mock */}
            <div style={{ marginBottom: '2rem' }}>
                <div className="category-dropdown">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Lightbulb size={24} color={categoriesMap[catId].color} />
                        <span style={{ fontWeight: 600 }}>{categoriesMap[catId].name}</span>
                    </div>
                    <ChevronDown size={20} color="#9CA3AF" />
                </div>
            </div>

            <button className="create-btn-main" onClick={handleCreate}>
                Create Task
            </button>
        </div>
    )
}
