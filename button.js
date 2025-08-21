                // Get the necessary DOM elements
                const openModalBtn = document.getElementById('openModalBtn');
                const closeModalBtn = document.getElementById('closeModalBtn');
                const modal = document.getElementById('modal');

                // Function to open the modal
                function openModal() {
                    modal.classList.remove('hidden');
                    // Animate the modal into view
                    setTimeout(() => {
                        modal.querySelector('div').classList.add('scale-100');
                        modal.querySelector('div').classList.remove('scale-95');
                    }, 10);
                }

                // Function to close the modal
                function closeModal() {
                    modal.querySelector('div').classList.remove('scale-100');
                    modal.querySelector('div').classList.add('scale-95');
                    setTimeout(() => {
                        modal.classList.add('hidden');
                    }, 300); // Wait for the transition to finish
                }

                // Event listeners
                // Open the modal when the button is clicked
                openModalBtn.addEventListener('click', openModal);

                // Close the modal when the 'X' button is clicked
                closeModalBtn.addEventListener('click', closeModal);

                // Close the modal if the user clicks outside of it
                window.addEventListener('click', (event) => {
                    // Check if the click occurred on the overlay itself, not the modal content
                    if (event.target === modal) {
                        closeModal();
                    }
                });

                // Close the modal if the Escape key is pressed
                window.addEventListener('keydown', (event) => {
                    if (event.key === 'Escape') {
                        closeModal();
                    }
                });