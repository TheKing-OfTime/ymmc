interface StatBadgeProps {
  icon: string;
  value: string;
  label: string;
  gradient: string;
  border: string;
  shadow: string;
  textColorDark: string;
  textColorLight: string;
  isDark: boolean;
}

export function StatBadge({
  icon,
  value,
  label,
  gradient,
  border,
  shadow,
  textColorDark,
  textColorLight,
  isDark,
}: StatBadgeProps) {
  return (
    <div
      className={`flex items-center gap-3 px-5 py-1.5 rounded-full bg-gradient-to-r ${gradient} backdrop-blur-md border ${border} shadow-lg ${shadow} transition-all hover:scale-105`}
    >
      <span className="text-xl drop-shadow-lg">{icon}</span>
      <div className="flex items-baseline gap-1.5">
        <span
          className={`text-base font-bold drop-shadow-sm ${
            isDark ? textColorDark : textColorLight
          }`}
        >
          {value}
        </span>
        <span
          className={`text-xs ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
