import Dropdown from "../pages/delete2";
import OrderBy from "./orderByComponent";

const FilterComponent = ({ filterText, onFilter }) => (
  <>
    <div>
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col-md-12 d-flex justify-content-end">
            <div className="doc-badge me-3">
              Total Patients <span className="ms-1">48</span>
            </div>
            <OrderBy />
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h5 className="card-title" style={{ marginLeft: "-49rem" }}>
            Patients
          </h5>
        </div>
        <div className="form-custom me-2">
          <div id="tableSearch" className="dataTables_wrapper">
            <div id="data-table_filter" className="dataTables_filter">
              <label>
                {" "}
                <input
                  id="search"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Search..."
                  value={filterText}
                  onChange={onFilter}
                />
              </label>
            </div>
          </div>
        </div>
        <Dropdown />
      </div>
    </div>
  </>
);

export default FilterComponent;
