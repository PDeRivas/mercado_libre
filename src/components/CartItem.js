export default function CartItem(item){
    item = item.item
    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src={item.thumbnail}/>
                <p className="ml-4">{item.title}</p>
            </th>
            <td className="px-6 py-4">
                {item.quantity}
            </td>
            <td className="px-6 py-4">
                {item.price * item.quantity}
            </td>
        </tr>
    )
}