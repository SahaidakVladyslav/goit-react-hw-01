import css from './TransactionHistory.module.css'


export default function TransactionHistory({props}) {
    return <>
    <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

{props.map(item=>   <tbody  key={item.id}>
    <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  </tbody>)}
</table>
    </>
}