/**
 * Performance utility functions
 * Debounce helper for optimizing event handlers
 */

/**
 * Debounce function - delays execution until after wait time has elapsed
 * @param func Function to debounce
 * @param wait Wait time in milliseconds
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any, ...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
