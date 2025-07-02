#include <raylib.h>

int main() {
    InitWindow(800, 500, "Basic");
    SetTargetFPS(60);

    while (!WindowShouldClose()) {
        BeginDrawing();

        // ClearBackground((Color){255, 0, 0, 255}); // Pure Red
        // ClearBackground((Color){0, 255, 0, 255}); // Pure Green
        // ClearBackground((Color){0, 0, 255, 255}); // Pure Blue
        // ClearBackground((Color){0, 0, 0, 255}); // Pure Black
        // ClearBackground((Color){0, 0, 0, 0}); // Invisible Color

        ClearBackground(WHITE);

        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                // DrawPixel(200 + i, 200 + j + i, RED);
                DrawPixelV((Vector2){200 + i, 200 + j + i}, RED);
            }
        }

        // DrawCircle(400, 400, 10, GREEN);
        DrawCircleV((Vector2){400, 400}, 50, GREEN);
        DrawCircleV((Vector2){400, 400}, 10, YELLOW);

        DrawLineEx((Vector2){100, 100}, (Vector2){300, 100}, 10, GREEN);

        EndDrawing();
    }

    CloseWindow();

    return 0;
}
