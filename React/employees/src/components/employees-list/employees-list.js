import EmloyeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css'

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmloyeesListItem />
            <EmloyeesListItem />
            <EmloyeesListItem />
        </ul>
    )
}

export default EmployeesList;