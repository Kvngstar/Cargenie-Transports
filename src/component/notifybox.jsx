import jwt from "../services/userService";

const NotifyBox = ({
  title,
  date,
  desc,
  seen,
  id,
  MarkAsRead,
  DeleteNote,
  read,
}) => {
  const info_id = id;
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
          {seen && (
            <span className="mr-3 align-items-center d-none d-md-flex">
              <span class="material-symbols-outlined mr-1">visibility</span>
              <span className="">{seen}</span>
            </span>
          )}
          <span className="mr-3 align-items-center d-none d-md-flex">
            <span class="material-symbols-outlined d-none d-md-block">calendar_month</span>
            <span class="">{date}</span>
          </span>
          { ((jwt.getDetails().as != "admin")) && (read &&
            (read == "false" ? (
              <span
                className="ml-1 py-1 px-2 rounded"
                style={{ backgroundColor: "#EEE82C" }}
              >
                unread
              </span>
            ) : (
              <span
                className=" px-2 py-1 ml-1 rounded"
                style={{ backgroundColor: "#91CB3E" }}
              >
                read
              </span>
            )))}
        </div>
      </div>
      <div className="fontsize14">{desc}</div>
{ (jwt.getDetails().as != "admin") &&   (read && read.toString() == "false" && (
        <div
          className="mark-as-read py-1 px-2 rounded bg-danger text-light"
          onClick={() => {
            MarkAsRead(info_id); 
          }}
        >
          mark as read
        </div>
      )) }




    { ( jwt.getDetails().as != "admin") &&  (read && read.toString() === "true" && (
        <div
          className="delete"
          onClick={() => {
            DeleteNote(info_id);
          }}
        >
          <span class="material-symbols-outlined">delete</span>
        </div>
      ))}
    </div>
  );
};

export default NotifyBox;
