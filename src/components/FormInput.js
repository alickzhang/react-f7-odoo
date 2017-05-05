import React from 'react'

export const FormInput = (props) => (
  <div className="item-input">
    {
      props.type === 'switch' ?
      <label className="label-switch">
        <input
          type="checkbox"
          checked={props.checked}
          disabled={props.disabled}
          onChange={props.onChange}
        />
        <div className="checkbox"></div>
      </label> :
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        readOnly={props.readonly}
        onChange={props.onChange}
      />
    }
  </div>
)
