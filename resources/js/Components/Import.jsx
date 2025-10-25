import { useForm } from "@inertiajs/react";

export default function Import(){
    const{
        data,
        post,   
        errors,
        setData,
    } = useForm({excel_file: null});

    const submitFile = (e) => {
    e.preventDefault();
    post(route("import"),{
        forceFormData: true
    });
  };  

    return(
        <>
            <h1>Import Excel file</h1>
            <form onSubmit={submitFile} encType="multipart/form-data">
                <input 
                    type="file" 
                    name="excel_file"
                    accept=".xlsx, .xls, .csv"
                    onChange={(e) => setData("excel_file", e.target.files[0])}
                />
            {errors.excel_file && (
                <div className="text-red-500 text-sm mt-1">{errors.excel_file}</div>
             )}
                <button type="submit" >Submit</button>
            </form>
        </>
    );
}