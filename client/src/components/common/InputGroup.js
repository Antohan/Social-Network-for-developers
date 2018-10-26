import * as React from 'react';
import classnames from 'classnames';

const InputGroup = (props) => {
  return (
    <div className="input-group mb-3">
			<div className="input-group-prepend">
				<span className="input-group-text">
					<i className={props.icon} />
				</span>
			</div>
      <input
        type={props.type}
        className={classnames('form-control form-control-lg', { 'is-invalid': props.error })}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange} />
      {props.error && (<div className="invalid-feedback">{props.error}</div>)}
    </div>
  );
}

export default InputGroup;