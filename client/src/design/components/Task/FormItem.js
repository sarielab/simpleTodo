import React from 'react'

const FormItem = (props) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">{props.name}</label>
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          <input className="input" id={'txt'+props.name} type={props.type} placeholder={props.name}/>
        </div>
      </div>
    </div>
  </div>
)

export default FormItem