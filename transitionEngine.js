// --- TASK 1: PRJ-3FF7-0004 (Define Transition Rules) ---
// Define 3 distinct journey stages
const STAGES = {
    AWARENESS: "Awareness",
    CONSIDERATION: "Consideration",
    CONVERSION: "Conversion"
};

/**
 * Business Rules Engine for Stage Transitions
 * Handles both advancing (Onboarding -> Engaged -> Converted) 
 * and edge cases (like repeat purchases or inactivity regressions).
 */
function getNextStage(currentStage, event) {
    // Edge Case: Repeat Purchase. If already converted, keep them in Conversion status.
    if (currentStage === STAGES.CONVERSION && event.type === 'PURCHASE_COMPLETED') {
        return STAGES.CONVERSION; 
    }

    switch (event.type) {
        case 'USER_REGISTERED':
            // Initial Entry Point
            return STAGES.AWARENESS;

        case 'PRODUCT_VIEWED_REPEATEDLY':
        case 'ADDED_TO_CART':
            // Advance from Awareness to Consideration
            if (currentStage === STAGES.AWARENESS) {
                return STAGES.CONSIDERATION;
            }
            break;

        case 'PURCHASE_COMPLETED':
            // Advance to Conversion stage
            return STAGES.CONVERSION;

        case 'CART_ABANDONED_LONG_TERM':
            // Regression Rule: Move an interested user back to Awareness if they drop off entirely
            if (currentStage === STAGES.CONSIDERATION) {
                return STAGES.AWARENESS;
            }
            break;

        default:
            return currentStage; // Keep current stage if trigger doesn't match criteria
    }
    return currentStage;
}

// --- TASK 3: PRJ-3FF7-0006 (Add Traceability Logging) ---
/**
 * Executes the state change transaction and prints logs for tracking
 */
function processUserEvent(user, event) {
    const previousStage = user.currentStage || "None";
    const nextStage = getNextStage(previousStage, event);

    if (previousStage !== nextStage) {
        user.currentStage = nextStage;
        // Structured log providing exact traceability of user progression/regression
        console.log(`[STAGE_TRANSITION] TIMESTAMP: ${new Date().toISOString()} | USER_ID: ${user.id} | TRANSITION: "${previousStage}" -> "${nextStage}" | TRIGGER: "${event.type}"`);
    } else {
        console.log(`[NO_TRANSITION] USER_ID: ${user.id} remains in "${previousStage}" via event "${event.type}"`);
    }

    return user;
}

module.exports = { STAGES, getNextStage, processUserEvent };
