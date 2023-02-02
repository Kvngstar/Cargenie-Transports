const NotifyBox = ({ title, date, desc, seen }) => {
  return (
    <div className="container mt-5 mb-2 p-3 notifybox rounded position-relative">
      <div className="d-flex-between mb-3 bg-light rounded ">
        <div>
          <p className="mb-0 poppinsmeduim fontsize14 p-2 d-flex align-items-center">
            <span class="material-symbols-outlined mr-1">new_releases</span>
            <span className="lightGreen-text"> {title}</span>
          </p>
        </div>
        <div className="d-flex align-items-center p-2 fontsize12">
          <span className="mr-3 align-items-center d-none d-md-flex">
            <span class="material-symbols-outlined mr-1">visibility</span>{" "}
            <span> {seen}</span>{" "}
          </span>
          <span class="material-symbols-outlined d-none d-md-block">calendar_month</span>
          <span className="ml-1"> {date} </span>
        </div>
      </div>
      <div className="fontsize14">{desc}</div>
    </div>
  );
};

export default NotifyBox;
