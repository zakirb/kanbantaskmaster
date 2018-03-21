import React from 'react'

const datePicker = () => {
  (
    <div>
     <DatePicker hintText="Portrait Dialog" />
     <DatePicker hintText="Landscape Dialog" mode="landscape" />
     <DatePicker hintText="Dialog Disabled" disabled={true} />
     <DatePicker hintText="Open to Year" openToYearSelection={true} />
   </div>
  )
}
export default datePicker
