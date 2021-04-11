function Page(props) {
  const { name, children } = props;

  return (
    <div className={`page ${name}`}>
      {children}
    </div>
  );
}

export default Page;
