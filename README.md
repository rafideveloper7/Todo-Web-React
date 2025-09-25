# Setup for useContext()



 ## 1 : folder structure :
    src/
    |   |components/
    |   |   | Todo.jsx
    |   |Context/
    |   |   | UserContext.jsx
    |   |Pages/
    |   |   | Home.jsx
    |   |   | Login.jsx
    |   |   | Register.jsx
    |   |App.jsx
    |   |main.jsx

---
## 2 : Context/Usercontext.jsx
<b>1.0 : </b> create a folder inside src named Context to create contexts inside that folder like about auth/User/Todo/Theme etc...

<b>1.1 </b> : its like boxes for storing global data and then any component will access easily if need. 

### syntax :
### 1 import
React function to create new context object <br />
   > import createContext <br />

### 2 Create Context <br />
 Here you're going to create a global box for user <br />
>export const UserContext = createContext(); <br />

### 3 UserProvider 

UserProvider is a container component that: <br />
Manages state internally <br />
Provides that state to all components wrapped inside it <br />
Eliminates the need for prop drilling <br />
Makes user data globally available within its scope <br />
It's the "bridge" that connects your context with your components! <br />

### 4 Create Provider Component
>export function UserProvider({ children }) { <br />
> const [user, setUser] = useState("Rafi Ullah"); <br />
>
> return ( <br />
> <UserContext.Provider value={{ user, setUser }}> <br />
>  {children} <br />
> </UserContext.Provider> <br />
>       ); <br />
> }  <br />