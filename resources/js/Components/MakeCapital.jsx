import React, {useState} from "react";
import { useForm } from "@inertiajs/react";

export default function MakeCapital() {
const [visible, setVisible] = useState(false);
const {
    data: capitalData,
    setData: setCapital,
    post: postCapital,
    processing: processingCapital,
    reset: resetForm,
  } = useForm({
    amount: "",
    type: ""
  });

  const submitCapital = (e) => {
    e.preventDefault();
    postCapital(route("add-capital"), {
      onSuccess: () => resetForm(),
    });
  };  
return (
    <div>
        <button onClick={() => setVisible(true)}>
            Add Capital
        </button>
        {visible && (
        <div>
        <button onClick={() => setVisible(false)}>
            Close
        </button>
        
        <form onSubmit={submitCapital}> 
        <h1>Amount: </h1>
        <input 
          type="number" 
          name="amount" 
          value={capitalData.amount || ''}
          onChange={(e) => setCapital("amount", Number(e.target.value))}/>
        <select 
          name="type" 
          value={capitalData.type} 
          onChange={(e) => setCapital("type", e.target.value)}
          required
          >
            <option value="" disabled>Select Type</option>
            <option value="withdraw">Withdraw</option>
            <option value="add">Add</option>
            <option value="initial">Initial</option>
        </select>
        {/* <input type="file" name="picture" accept="image/*" required> */}
        <button type="submit" onClick={resetForm} disabled={processingCapital}>Submit</button>
        <button type="button" onClick={resetForm}>Clear</button>
        </form>
        </div>
        )}
    </div>
    );
}
