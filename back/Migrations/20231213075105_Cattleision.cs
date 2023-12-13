using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cattleision.Migrations
{
    /// <inheritdoc />
    public partial class Cattleision : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cameras_AspNetUsers_UserId",
                table: "Cameras");

            migrationBuilder.DropIndex(
                name: "IX_Cameras_UserId",
                table: "Cameras");

            migrationBuilder.DropColumn(
                name: "Barnyard_ID",
                table: "Cameras");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Cameras");

            migrationBuilder.DropColumn(
                name: "CCI",
                table: "AIOutputs");

            migrationBuilder.DropColumn(
                name: "SSI",
                table: "AIOutputs");

            migrationBuilder.RenameColumn(
                name: "OwnerId",
                table: "Cameras",
                newName: "BarnyardId");

            migrationBuilder.RenameColumn(
                name: "SUI",
                table: "AIOutputs",
                newName: "CI_value");

            migrationBuilder.AddColumn<int>(
                name: "outputType",
                table: "AIOutputs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Barnyards",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    total_Cow_count = table.Column<int>(type: "int", nullable: false),
                    OwnerId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Number = table.Column<int>(type: "int", nullable: false),
                    MilkingTime = table.Column<TimeOnly>(type: "time", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Barnyards", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Barnyards_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cameras_BarnyardId",
                table: "Cameras",
                column: "BarnyardId");

            migrationBuilder.CreateIndex(
                name: "IX_Barnyards_UserId",
                table: "Barnyards",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cameras_Barnyards_BarnyardId",
                table: "Cameras",
                column: "BarnyardId",
                principalTable: "Barnyards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cameras_Barnyards_BarnyardId",
                table: "Cameras");

            migrationBuilder.DropTable(
                name: "Barnyards");

            migrationBuilder.DropIndex(
                name: "IX_Cameras_BarnyardId",
                table: "Cameras");

            migrationBuilder.DropColumn(
                name: "outputType",
                table: "AIOutputs");

            migrationBuilder.RenameColumn(
                name: "BarnyardId",
                table: "Cameras",
                newName: "OwnerId");

            migrationBuilder.RenameColumn(
                name: "CI_value",
                table: "AIOutputs",
                newName: "SUI");

            migrationBuilder.AddColumn<int>(
                name: "Barnyard_ID",
                table: "Cameras",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Cameras",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "CCI",
                table: "AIOutputs",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "SSI",
                table: "AIOutputs",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.CreateIndex(
                name: "IX_Cameras_UserId",
                table: "Cameras",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cameras_AspNetUsers_UserId",
                table: "Cameras",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
