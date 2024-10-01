import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

const TableView = ({ handleEdit, handleDelete , handleAdd , products}) => {

 
  return (
    <div className="p-4">
      
      <div className="mb-4">
        <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" >
          Add New Product
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Action</th>
              <th className="py-3 px-6 text-left">Images</th>
              <th className="py-3 px-6 text-left">Product Name</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Regular Price</th>
              <th className="py-3 px-6 text-left">Sale Price</th>
              <th className="py-3 px-6 text-left">Discount</th>
              <th className="py-3 px-6 text-left">Available Stock</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Material</th>
              <th className="py-3 px-6 text-left">Shape</th>
              <th className="py-3 px-6 text-left">Place of Origin</th>
              <th className="py-3 px-6 text-left">Design</th>
              <th className="py-3 px-6 text-left">Min. Avail Pcs</th>
              <th className="py-3 px-6 text-left">Usage</th>
              <th className="py-3 px-6 text-left">Function</th>
              <th className="py-3 px-6 text-left">Brand Name</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
          {products && products.length > 0 && products.map((item) => (
              <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  <div className="flex gap-4 item-center">
                    <div className="mr-2 cursor-pointer" onClick={() => handleEdit(item)}>
                      <FaEdit className="text-xl text-blue-500" />
                    </div>
                    <div className="cursor-pointer" onClick={() => handleDelete(item._id)}>
                      <MdDelete className="text-2xl text-red-500" />
                    </div>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  {item.Images && item.Images.length > 0 && (
                    <img src={item.Images[0]} alt={item.Product_Name} className="w-16 h-16 object-cover" />
                  )}
                </td>
                <td className="py-3 px-6 text-left">{item.Product_Name}</td>
                <td className="py-3 px-6 text-left">{item.Category}</td>
                <td className="py-3 px-6 text-left">{item.Regular_Price}</td>
                <td className="py-3 px-6 text-left">{item.Sale_Price}</td>
                <td className="py-3 px-6 text-left">{item.Discount}</td>
                <td className="py-3 px-6 text-left">{item.Avail_Stock}</td>
                <td className="py-3 px-6 text-left">{item.Status}</td>
                <td className="py-3 px-6 text-left">{item.General[0].Material}</td>
                <td className="py-3 px-6 text-left">{item.General[0].Shape}</td>
                <td className="py-3 px-6 text-left">{item.General[0].Place_of_Origin}</td>
                <td className="py-3 px-6 text-left">{item.General[0].Design}</td>
                <td className="py-3 px-6 text-left">{item.General[0].MOQ}</td>
                <td className="py-3 px-6 text-left">{item.General[0].Usage}</td>
                <td className="py-3 px-6 text-left">{item.General[0].Function}</td>
                <td className="py-3 px-6 text-left">{item.General[0].Brand_Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <AddEditForm
        visible={visible}
        setVisible={setVisible}
        productToEdit={productToEdit}
        setProductToEdit={setProductToEdit}
         onProductUpdated={fetchProducts} formData={formData} setFormData={setFormData}
      /> */}
      <ConfirmDialog  className='bg-white p-5'/>
    </div>
  );
};

export default TableView;