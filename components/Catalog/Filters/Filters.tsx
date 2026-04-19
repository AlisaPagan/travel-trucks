import Button from "@/components/UI/Button/Button";
import styles from "./Filters.module.css";
import { FiltersProps } from "@/types";
import Icon from "@/components/UI/Icon/Icon";

function Filters({
  draftFilters,
  setDraftFilters,
  handleFilterSubmit,
  resetFiltersHandler,
}: FiltersProps) {
  return (
    <div className={styles.filtersWrapper}>
      <form className={styles.filtersForm} onSubmit={handleFilterSubmit}>
        <div className={styles.locationWrapper}>
          <label className={styles.searchLabel} htmlFor="search">
            Location
          </label>
          <div className={styles.searchField}>
            <input
              className={styles.searchInput}
              type="text"
              id="search"
              value={draftFilters.location}
              onChange={(e) =>
                setDraftFilters((prev) => ({
                  ...prev,
                  location: e.target.value,
                }))
              }
              placeholder="City"
            />

            <span className={styles.inputIcon}>
              <Icon name="location" className={styles.locationIcon} />
            </span>
          </div>
        </div>

        {/* form filter */}
        <div className={styles.filterGroupsWrapper}>
          <h3 className={styles.filtersTitle}>Filters</h3>
          <div className={styles.radioGroup}>
            <p className={styles.radioGroupTitle}>Camper form</p>
            <label className={styles.radioLabel}>
              <input
                className={styles.radioBtn}
                type="radio"
                name="form"
                value="alcove"
                onChange={() =>
                  setDraftFilters((prev) => ({ ...prev, form: "alcove" }))
                }
                checked={draftFilters.form === "alcove"}
              />
              Alcove
            </label>
            <label className={styles.radioLabel}>
              <input
                className={styles.radioBtn}
                type="radio"
                name="form"
                value="panel_van"
                onChange={() =>
                  setDraftFilters((prev) => ({ ...prev, form: "panel_van" }))
                }
                checked={draftFilters.form === "panel_van"}
              />
              Panel Van
            </label>
            <label className={styles.radioLabel}>
              <input
                className={styles.radioBtn}
                type="radio"
                name="form"
                value="integrated"
                onChange={() =>
                  setDraftFilters((prev) => ({ ...prev, form: "integrated" }))
                }
                checked={draftFilters.form === "integrated"}
              />
              Integrated
            </label>
            <label className={styles.radioLabel}>
              <input
                className={styles.radioBtn}
                type="radio"
                name="form"
                value="semi_integrated"
                onChange={() =>
                  setDraftFilters((prev) => ({
                    ...prev,
                    form: "semi_integrated",
                  }))
                }
                checked={draftFilters.form === "semi_integrated"}
              />
              Semi integrates
            </label>
          </div>

          {/* Engine filter */}
          <div className={styles.radioGroup}>
            <p className={styles.radioGroupTitle}>Engine</p>
            <label className={styles.radioLabel}>
              <input
                className={styles.radioBtn}
                type="radio"
                name="engine"
                value="diesel"
                onChange={() =>
                  setDraftFilters((prev) => ({ ...prev, engine: "diesel" }))
                }
                checked={draftFilters.engine === "diesel"}
              />
              Diesel
            </label>
            <label className={styles.radioLabel}>
              <input
                className={styles.radioBtn}
                type="radio"
                name="engine"
                value="petrol"
                onChange={() =>
                  setDraftFilters((prev) => ({ ...prev, engine: "petrol" }))
                }
                checked={draftFilters.engine === "petrol"}
              />
              Petrol
            </label>
            <label className={styles.radioLabel}>
              <input
                className={styles.radioBtn}
                type="radio"
                name="engine"
                value="hybrid"
                onChange={() =>
                  setDraftFilters((prev) => ({
                    ...prev,
                    engine: "hybrid",
                  }))
                }
                checked={draftFilters.engine === "hybrid"}
              />
              Hybrid
            </label>
            <label className={styles.radioLabel}>
              <input
                className={styles.radioBtn}
                type="radio"
                name="engine"
                value="electric"
                onChange={() =>
                  setDraftFilters((prev) => ({
                    ...prev,
                    engine: "electric",
                  }))
                }
                checked={draftFilters.engine === "electric"}
              />
              Electric
            </label>
          </div>

          {/* transmission filter */}
          <div className={styles.radioGroup}>
            <p className={styles.radioGroupTitle}>Transmission</p>
            <label className={styles.radioLabel}>
              <input
                className={styles.radioBtn}
                type="radio"
                name="transmission"
                value="automatic"
                onChange={() =>
                  setDraftFilters((prev) => ({
                    ...prev,
                    transmission: "automatic",
                  }))
                }
                checked={draftFilters.transmission === "automatic"}
              />
              Automatic
            </label>
            <label className={styles.radioLabel}>
              <input
                className={styles.radioBtn}
                type="radio"
                name="transmission"
                value="manual"
                onChange={() =>
                  setDraftFilters((prev) => ({
                    ...prev,
                    transmission: "manual",
                  }))
                }
                checked={draftFilters.transmission === "manual"}
              />
              Manual
            </label>
          </div>
        </div>
        <div className={styles.filterButtons}>
          <Button className={styles.filtersBtn} variant="primary" type="submit">
            Search
          </Button>
          <Button
            className={styles.filtersBtn}
            variant="secondary"
            type="button"
            onClick={resetFiltersHandler}
            icon="close"
          >
            Clear filters
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Filters;
