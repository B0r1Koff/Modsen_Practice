function referenceErrorCheck() {
  try {
    console.log(undefinedVariable);
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log(new Error("Reference error"));
    } else {
      throw error;
    }
  }
}

referenceErrorCheck(); // Error: Reference error
