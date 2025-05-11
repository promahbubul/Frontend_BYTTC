import Input from "../ui/Input";

const AddCourseModal = ({
  onSubmit,
  modalName,
  modalTitle,
  buttonText,
  buttonShow,
  course,
}) => {
  return (
    <div className="">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {buttonShow && (
        <div className="mr-auto text-end mb-5">
          <button
            onClick={() => document.getElementById(modalName).showModal()}
            className="btn btn-lg btn-success text-end"
          >
            {modalTitle}
          </button>
        </div>
      )}

      <dialog id={modalName} className="modal ">
        <div className="modal-box bg-black">
          <form onSubmit={onSubmit} className="">
            <Input
              defaultValue={course?.name}
              ledend={"Course Name: "}
              placeholder={"Enter your course name"}
              name={"name"}
              required={true}
            />
            <Input
              defaultValue={course?.price}
              ledend={"Price: "}
              placeholder={"Enter your course price"}
              name={"price"}
              required={true}
            />
            <Input
              defaultValue={course?.duration}
              ledend={"Duration: "}
              placeholder={"Enter your course duration"}
              name={"duration"}
              required={true}
            />
            <Input
              defaultValue={course?.availableSeat}
              ledend={"Available Seat: "}
              placeholder={"Enter your available seat"}
              name={"availableSeat"}
            />
            <button
              type="submit"
              className="w-full btn mt-5 btn-lg btn-success"
            >
              {buttonText}
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
export default AddCourseModal;
