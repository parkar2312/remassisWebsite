import Dropdown from "../pages/delete2";
import OrderBy from "./orderByComponent";

const FilterComponent = ({ filterText, onFilter }) => (
  <>
    <div>
      <div class="page-header">
        <div class="row align-items-center">
          <div class="col-md-12 d-flex justify-content-end">
            <div class="doc-badge me-3">
              Total Patients <span class="ms-1">48</span>
            </div>
            <OrderBy />
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h5 class="card-title" style={{ marginLeft: "-49rem" }}>
            Patients
          </h5>
        </div>
        <div class="form-custom me-2">
          <div id="tableSearch" class="dataTables_wrapper">
            <div id="data-table_filter" class="dataTables_filter">
              <label>
                {" "}
                <input
                  id="search"
                  type="text"
                  class="form-control form-control-sm"
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
