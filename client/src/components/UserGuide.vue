<template>
    <b-container class="back">
        <div>
            <br>
            <img src="@/assets/userguide.png" width=750px heigth=150px alt="User Guide">
            <div class="questions">
                <!-- I plan to add .gifs to demo the steps and more questions -->
                <h4>How do I access the database?</h4>
                <ul>
                    <li>
                        If you are an authorized user, you may login using your credentials in order to access the
                        business records on the database and make changes.
                    </li>
                </ul>
                <h4>How do I access a table?</h4>
                <ul>
                    <li>
                        In the navigation bar located at the top of the page, you can select a table to access the
                        records associated with
                        that table.
                    </li>
                </ul>
                <h4>How do I add a record to a table?</h4>
                <ul>
                    <li>
                        You can click on the green "Add New" button in order to load a form that can be used to add a
                        new record to the
                        table.
                    </li>
                </ul>
                <h4>What if I do not want to add a new record anymore?</h4>
                <ul>
                    <li>
                        You can click on the red "Cancel" button in order to be taken back to the previous page.
                    </li>
                </ul>
                <h4>How do I edit a record?</h4>
                <ul>
                    <li>
                        You can edit a record by first clicking on a record to select it, then clicking the gray
                        "Update" button to be taken to a form to edit the data points in a record.
                    </li>
                </ul>
                <h4>What if I do not want to edit a record anymore?</h4>
                <ul>
                    <li>
                        You can click on the red "Cancel" button in order to be taken back to the previous page.
                    </li>
                </ul>
                <h4>How do I delete a record?</h4>
                <ul>
                    <li>
                        You can delete a record by first clicking on a record to select it and then clicking the red
                        "Delete" button to remove it.
                    </li>
                </ul>
                <h4>What is that moon icon on the lower right hand side of the screen?</h4>
                <ul>
                    <li>
                        You found the dark mode toggle! Click it to toggle dark mode for the app!
                    </li>
                    <img src="@/assets/dkmtoggle.png" alt="Dark Mode Toggle">
                </ul>
            </div>
        </div>
    </b-container>
</template>

<style scoped>
    .questions {
        text-align: left;
    }

    .back {
        background-color: white;
    }
</style>