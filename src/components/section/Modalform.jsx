import {useState, useEffect} from 'react'
import {useClient} from "../context/ModalContext"

const Modalform = () => {

    const {
        isModalOpen,
        closeModal,
        modalMode,
        selectedClient,
        addClient,
        updateClient,
    } = useClient


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [job, setJob] = useState("")
    const [rate, setRate] = useState("")
    const [status, setStatus] = useState("false")

    esuEffect(() => {
    if (isModalOpen && modalMode === "edit" && selectedClient) {
        setName(selectedClient.name ?? "")
        setEmail(selectedClient.name ?? "")
        setJob(selectedClient.name ?? "")
        setRate(selectedClient.name ?? "")
        setStatus(selectedClient.name ?? "")
    } else {
        setName("");
        setEmail("");
        setJob("");
        setRate("");
        setStatus("false");
    }
    }, [isModalOpen, modalMode, selectedClient]);

    const handlerSubmit = async (e) => {
        e.preventDefault();
    

    if (modalMode === "edit" && selectedClient) {
        const original = selectedClient;
        const payload = {}
    
        if (name !== (original.name ?? "")) payload.name = name;
        if (email !== (original.email ?? "")) payload.email = email;
        if (job !== (original.job ?? "")) payload.job = job;
        if (String(original.rate ?? "") !== rate)
            payload.rate = Number(rate) || 0;
        if (Boolean(original.status) !== Boolean(status))
            payload.status = Boolean(status);

        if (Object.keys(payload).length === 0) {
            closeModal();
            return;
        }

        await updateClient(original.id, payload);
        return;
    }

    // untuk add client
    const newClient = {
        ...(name ? { name } : {}),
        ...(email ? { email } : {}),
        ...(job ? { job } : {}),
        ...(rate !== "" ? {rate: Number(rate) || 0} : {}),
        ...(typeof status === "boolean" ? {status} : {}),
    }

    await addClient(newClient);
};

    return (
    <dialog id='my_modal_3' className='modal' open={isModalOpen}>
        <div className='modal-box'>
            <h3 className='font-bold text-lg py-4'>
                {modalMode === "edit" ? "Edit Client" : "Clinet Details"}
            </h3>

            <form onSubmit={handlerSubmit}>
                <fieldset className='fieldset'>
                    <legend className='fieldset-legend text-start'>Name</legend>
                    <input
                    type='text'
                    className='input'
                    placeholder='type Here'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                </fieldset>
                
                <fieldset className='fieldset'>
                    <legend className='fieldset-legend text-start'>job</legend>
                    <input
                    type='text'
                    className='input'
                    placeholder='type Here'
                    value={job}
                    onChange={(e)=> setJob(e.target.value)}>
                    </input>
                </fieldset>

                <div className='flex mb-7 justify-between my-4 gap-4'>
                    <label className='input input-bordered flex items-center gap-2'>
                        rate
                        <input type='number'
                        className='grow'
                        placeholder='0'
                        value={rate}
                        onChange={(e)=>setRate(e.target.value)}
                        />
                    </label>

                    <select value={status ? "Active" : "Inactive"} 
                    className='select'
                    onChange={(e) => setStatus(e.target.value === "Active")}
                    >
                        <option>Inactive</option>
                        <option>Active</option>
                    </select>
                </div>

                {/* close & submit */}
                <button type='button'
                className='btn btn-circle btn-ghost absolute right-2 top-2'
                onClick={closeModal}
                >X</button>
                <button className='btn btn-success' type='submit'>
                    {modalMode === "edit" ? "Save Changes" : "Add Client"}
                </button>
            </form>
        </div>
    </dialog>
  )
}

export default Modalform