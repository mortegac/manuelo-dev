import { Driver } from "./Driver";

/**
 * List of posts.
 */
export const DriverList = ({ driverProfiles }) => {
  return (
    <>
      <h1>Formula 1 Driver profiles</h1>
      <ul className="grid gap-10 md:gap-12">
        {driverProfiles.map((driver) => (
          <li key={driver.id}>
            <Driver driver={driver} />
          </li>
        ))}
      </ul>
    </>
  );
};
