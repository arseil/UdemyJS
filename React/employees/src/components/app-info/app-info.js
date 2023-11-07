import './app-info.css'

const AppInfo = ({employees, increased}) => {    
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Arseil</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    );
}

export default AppInfo;

// import './app-info.css'

// const AppInfo = ({ data }) => {

//     let bonus = 0;
//     data.forEach(item => {
//         if (item.increase === true) {
//             bonus += 1
//         }
//     })
    
//     return (
//         <div className="app-info">
//             <h1>Учет сотрудников в компании Arseil</h1>
//             <h2>Общее число сотрудников: {data.length}</h2>
//             <h2>Премию получат: {bonus}</h2>
//         </div>
//     );
// }

// export default AppInfo;