import { useOutletContext } from 'react-router-dom';
import ResultCard from '../../components/ResultCard';
import PlatformBadge from '../../components/PlatformBadge';

export default function ReportPlatforms() {
  const { result } = useOutletContext();

  return (
    <div className="space-y-8 flex flex-col">
      <ResultCard title="Platform Matrices" icon="📱" delay="400">
        <div className="space-y-4">
          <PlatformBadge 
            platform="Twitter / X Network" 
            score={result.platform_fit.Twitter?.score} 
            suggestion={result.platform_fit.Twitter?.suggestion} 
            improvedPost={result.platform_fit.Twitter?.improved_post}
          />
          <PlatformBadge 
            platform="LinkedIn Network" 
            score={result.platform_fit.LinkedIn?.score} 
            suggestion={result.platform_fit.LinkedIn?.suggestion} 
            improvedPost={result.platform_fit.LinkedIn?.improved_post}
          />
          <PlatformBadge 
            platform="Instagram Network" 
            score={result.platform_fit.Instagram?.score} 
            suggestion={result.platform_fit.Instagram?.suggestion} 
            improvedPost={result.platform_fit.Instagram?.improved_post}
          />
        </div>
      </ResultCard>
    </div>
  );
}
