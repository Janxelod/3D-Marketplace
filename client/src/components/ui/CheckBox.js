const CheckBox = ({ label, value, onChange, className }) => {
   return (
      <div className={className}>
         <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
         </label>
      </div>
   );
 };

 export default CheckBox;