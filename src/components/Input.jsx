export default function Input({id,label, className, touched, error, values, ...rest}) {4

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        className={className + " border rounded-md border-white text-white p-4 text-sm w-80 bg-transparent placeholder-gray-300 " }
        {...rest}
      />
      {touched && error && values && (
        <div className="text-red-300 text-sm mt-1">{error}</div>
      )}
    </div>
  );
}
