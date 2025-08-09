// import {
//     createContext,
//     useContext,
//     useEffect,
//     useMemo,
//     useRef,
//     useState,
// } from "react"

// const ModalContext = createContext(null); 

// export const useClient = () => useContext(ModalContext)

// export const ClientProvider = createContext = ({Children}) 
//     const [clients, setClients] = useState([])
//     const [selectedClients, setselectedClients] = useState([null])
//     const [isModalOpen, setisModalOpen] = useState([false])
//     const [modalMode, setModalMod] = useState(["add"])
//     const [search, setSearch] = useState([""])
//     const [loading, setLoading] = useState([false])

//     const abortRef = useRef(null);

//     // Open Modal for Edit
//     const openEditModal = (clients) => {
//         setselectedClients(clients);
//         setModalMode("Add")
//         setisModalOpen(true)
//     }

//     //open modal for add new client
//     const openAddModal = () => {
//         setselectedClients(null)
//         setModalMode("Add")
//         setisModalOpen(true)
//     }

//     const closeModal = () => setisModalOpen (false)

//     useEffect(() => {
//         fetchClient();
//     }, [])

//     useEffect(() => {
//         const t = setTimeout(() => fetchClient(search), 300);
//         return () => clearTimeout (t);
//     }, [search]);

//     const value = useMemo(
//         () => ({
//             // data
//             clients,
//             loading,
//             //modal
//             selectedClient,
//             isModalOpen,
//             modalMode,
//             openAddModal,
//             openEditModal,
//             closeModal,
//             //search
//             search,
//             setSearch
//         }),
//         [clients, loading, selectedClient, isModalOpen, modalMode, search]
//     );

//     return (
//         <ModalContext.Provider value={value}>{Children}</ModalContext.Provider>
//     );