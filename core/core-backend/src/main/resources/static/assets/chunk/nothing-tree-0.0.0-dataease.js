const A="data:image/png;base64,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";export{A as n};
