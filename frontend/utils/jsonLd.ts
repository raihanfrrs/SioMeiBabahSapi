export function removeEmptyFields(obj: any): any {
  if (Array.isArray(obj)) {
    const cleanedArray = obj.map(removeEmptyFields).filter((v) => v !== null && v !== undefined);
    return cleanedArray.length > 0 ? cleanedArray : undefined;
  } else if (obj !== null && typeof obj === 'object') {
    const cleanedObj = Object.entries(obj).reduce((acc, [key, value]) => {
      const cleanedValue = removeEmptyFields(value);
      if (cleanedValue !== null && cleanedValue !== undefined) {
        acc[key] = cleanedValue;
      }
      return acc;
    }, {} as any);
    
    return Object.keys(cleanedObj).length > 0 ? cleanedObj : undefined;
  }
  return obj;
}
