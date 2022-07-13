import React from "react";

function ContainerPage4() {
  return (
    <div class="container-xxl py-5 my-5">
      <div class="row pb-5 mb-5 justify-content-center">
        <div class="col-12 col-md-10">
          <h2
            class="display-1 wow fadeInUp"
            //  style="visibility: visible; animation-name: fadeInUp;"
          >
            See how we're <strong>making it easier</strong> to run a thriving,
            rewarding practice.
          </h2>{" "}
          <button
            type="button"
            class="btn btn-primary wow fadeInUp text-nowrap"
            data-bs-toggle="modal"
            data-bs-target="#modalDemoRequestBody"
            //  style="visibility: visible; animation-name: fadeInUp;"
          >
            {" "}
            Get a demo{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContainerPage4;
