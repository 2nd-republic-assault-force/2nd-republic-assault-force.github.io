import { KillMap } from "../../components/KillMap";
import { TopBar } from "../../components/TopBar";

export const StatsPage: React.FC = () => {
      return (
            <TopBar>
                  <div>
                        <KillMap />
                  </div>
            </TopBar>
      );
};
