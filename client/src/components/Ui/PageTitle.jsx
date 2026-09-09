function PageTitle({ eyebrow, children, description }) {
  return (
    <div className="page-title">
      {eyebrow && <span>{eyebrow}</span>}

      <h1>{children}</h1>

      {description && <p>{description}</p>}
    </div>
  );
}

export default PageTitle;
