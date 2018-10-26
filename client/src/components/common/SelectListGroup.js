import * as React from 'react';
import classnames from 'classnames';

const SelectListGroup = (props) => {
	const selectOntions = options.map(option => (
		<option key={option.label} value={option.value}>
			{option.label}
		</option>
	));

  return (
    <div className="form-group">
      <select
        className={classnames('form-control form-control-lg', { 'is-invalid': props.error })}
        name={props.name}
        value={props.value}
        onChange={props.onChange}>{selectOntions}
			</select>
      {props.info && <small className="form-text text-muted">{props.info}</small>}
      {props.error && (<div className="invalid-feedback">{props.error}</div>)}
    </div>
  );
}

export default SelectListGroup;