import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import './index.css'

export default function Error() {
    return (
        <h1 className = 'errMsg'>
            <ReportProblemIcon className='errIcon' fontSize = 'lg' /> | Esta página não pode ser encontrada.
        </h1>
    )
}
