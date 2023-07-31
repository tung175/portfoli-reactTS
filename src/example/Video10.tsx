import { ReactHTMLElement, SyntheticEvent, useState } from "react";
import './Video10.css'
export interface IUsers {
    name: string,
    age: number | string,
    city: string
}

export interface IProps {
    defautName: string,
    defautAge: number | string
}

const Video10 = (props: IProps) => {
    const {defautName, defautAge} = props

    const [name, setName] = useState<string>(defautName);
    const [age, setAge] = useState<number | string>(defautAge);
    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    const [selectedCity, setSelectedCity] = useState<string>("Hà Nội")
    const [users, setUsers] = useState<IUsers[]>([
        { name: "Tung", age: 25, city: "Hà Nội" },
        { name: "Tung1", age: 26, city: "Đà Nẵng" },
        { name: "Tung2", age: 27, city: "Hồ Chí Minh" },
    ])
    // console.log("check useers", users);
    
    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
       const user = {
        name: name,
        age: age,
        city: selectedCity,
       }
    //    console.log(user);
       
       setUsers([...users, user])
    //    console.log(users);
       
       setName("")
       setAge("")
    }

    const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setAge(event.target.value)
    }

    // const handleOnSelected = (event: React.ChangeEvent<HTMLInputElement>) =>{
    //     setSelectedCity(event.target.value)
    // }
    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input type="text" value={name} onChange={(event) => handleOnChangeName(event)}/><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input type="text" value={age} onChange={(event) => handleOnChangeAge(event)}/><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select
                    onChange={(event) => setSelectedCity(event.target.value)}>
                    {city.map((item: string) => {
                        return(
                        <option key={item} value={item}>{item}</option>
                        )
                    })}
                    </select>
                </div>

                <input type="submit" value="Submit" onClick={(event) => handleSubmit(event)} />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((item: any) => {
                            return(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                        </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;