import App from './App'
import WorkoutDetail from './components/workout-detail/WorkoutDetail'
import ProgressOverview from './components/progress-overview/ProgressOverview'
import { ReactComponent as StarIcon } from './assets/icons/star-filled.svg'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Completing a workout adds a star to the progress overview.', () => {

  it('displays workout button', () => {
    render(<App />)
    const workoutButton = screen.getByRole('button', { name: 'Push' })
    expect(workoutButton).toBeDefined()
  })

  it('clicks workout button and displays workout details', () => {
    render(<App />)
    const workoutButton = screen.getByRole('button', { name: 'Push' })
    userEvent.click(workoutButton)
    expect(<WorkoutDetail />).toBeDefined()
  })

  it('displays add set button', () => {
    render(<App />)
    const workoutButton = screen.getByRole('button', { name: 'Push' })
    userEvent.click(workoutButton)
    const addSetButton = screen.getByRole('button', { name: 'Add Set' })
    expect(addSetButton).toBeDefined()
  })

  it('displays input field after clicking add set', () => {
    render(<App />)
    const workoutButton = screen.getByRole('button', { name: 'Push' })
    userEvent.click(workoutButton)
    const addSetButton = screen.getByRole('button', { name: 'Add Set' })
    userEvent.click(addSetButton)
    const setInputField = screen.getByLabelText('Set 1')
    expect(setInputField).toBeDefined()
  })

  it('changes input value to what is typed in it', () => {
    render(<App />)
    const workoutButton = screen.getByRole('button', { name: 'Push' })
    userEvent.click(workoutButton)
    const addSetButton = screen.getByRole('button', { name: 'Add Set' })
    userEvent.click(addSetButton)
    const setInputField = screen.getByLabelText('Set 1')
    userEvent.type(setInputField, '10')
    expect(setInputField.value).toBe('10')
  })

  it('clicks complete sets and displays progress overview', () => {
    render(<App />)
    const workoutButton = screen.getByRole('button', { name: 'Push' })
    userEvent.click(workoutButton)
    const addSetButton = screen.getByRole('button', { name: 'Add Set' })
    userEvent.click(addSetButton)
    const setInputField = screen.getByLabelText('Set 1')
    userEvent.type(setInputField, '10')
    const completeButton = screen.getByRole('button', { name: 'Complete Sets' })
    userEvent.click(completeButton)
    expect(<ProgressOverview />).toBeDefined()
  })

  it('added a star to the progress overview', () => {
    render(<App />)
    const workoutButton = screen.getByRole('button', { name: 'Push' })
    userEvent.click(workoutButton)
    const addSetButton = screen.getByRole('button', { name: 'Add Set' })
    userEvent.click(addSetButton)
    const setInputField = screen.getByLabelText('Set 1')
    userEvent.type(setInputField, '10')
    const completeButton = screen.getByRole('button', { name: 'Complete Sets' })
    userEvent.click(completeButton)
    expect(StarIcon).toBeDefined()
  })

})
