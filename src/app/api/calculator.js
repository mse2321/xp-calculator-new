/**
 * Calculates the result based on form data numbers.
 * @param {Object} formData - Object containing numeric fields from the form.
 * @returns {number} - The calculated result.
 */
function calculateFormData(formData) {
    // Example: sum all numeric values in formData
    let result = 0;
    for (const key in formData) {
        const value = Number(formData[key]);
        if (!isNaN(value)) {
            result += value;
        }
    }
    return result;
}

module.exports = calculateFormData